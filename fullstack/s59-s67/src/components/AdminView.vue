<script>
  // Notyf
  import { Notyf } from 'notyf';

  const notyf = new Notyf();

  export default {
      props: {
          coursesData: Object
      },
      setup({ courseData }) {

          // const {user} = useGlobalStore();

          // return {
          //     user
          // }
      }
  }
</script>

<template>
  <div>
    <h1 class="text-center text-primary">
      Admin Dashboard
    </h1>

    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Availability</th>
          <th colspan="2">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="course in coursesData.data"
          :courseData="course"
        >
          <td>{{ course._id }}</td>
          <td>{{ course.name }}</td>
          <td>{{ course.description }}</td>
          <td>{{ course.price }}</td>

          <td>
            <span
              v-if="course.isActive"
              class="text-success"
            >
              Available
            </span>

            <span
              v-else
              class="text-danger"
            >
              Unavailable
            </span>
          </td>

          <td>
            <button class="btn btn-primary btn-sm">
              Edit
            </button>
          </td>

          <td>
            <button class="btn btn-danger btn-sm">
              Archive
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>