import { createApp } from 'vue';

const app = createApp({
  data() {
    return {
      // Define data properties here
      items: [
        { id: 1, name: 'Rock', age: 17, rating: 4.6, selected: false },
        { id: 2, name: 'Jack', age: 23, rating: 4.8, selected: false },
        { id: 3, name: 'Mil', age: 3, rating: 5.0, selected: false },
        { id: 4, name: 'Aida', age: 18, rating: 4.7, selected: false },
        { id: 5, name: 'Tania', age: 15, rating: 4.5, selected: false },
        { id: 6, name: 'MC Stain', age: 8, rating: 5.0, selected: false },
        { id: 7, name: 'Bugit', age: 9, rating: 5.0, selected: false }
      ],
      newName: '',
      newAge: '',
      newRating: '',
    };
  },
  methods: {
    // Add methods for handling user inputs
    toggleSelection(item) {
      item.selected = !item.selected;
    },
    addItem() {
      if (this.newName && this.newAge && this.newRating) {
        const newItem = {
          id: this.items.length + 1,
          name: this.newName,
          age: parseInt(this.newAge),
          rating: parseFloat(this.newRating),
          selected: false,
        };
        this.items.push(newItem);
        this.newName = '';
        this.newAge = '';
        this.newRating = '';
      }
    },
  },
});

app.component('header-component', {
    template: `
      <header>
          <div class="logo">
            <img src="logo.png" alt="Company Logo">
          </div>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
      </header>
      `,
  });

app.component('image-component', {
  template: `
    <section class="back_image_section">
        <div class="back_image"></div>
    </section>
    `,
});

app.component('table-component', {
  props: ['items'],
  template: `
    <section class="table_section">
        <table>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.rating }}</td>
                    <td>
                      <button @click="toggleSelection(item)">
                        {{ item.selected ? 'Deselect' : 'Select' }}
                      </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    `,
});

app.component('form-component', {
  props: ['newName', 'newAge', 'newRating'],
  template: `
    <section class="form_section">
        <form @submit.prevent="addItem">
            <input type="text" v-model="newName" placeholder="Enter Name">
            <input type="number" v-model="newAge" placeholder="Enter Age">
            <input type="number" step="0.1" v-model="newRating" placeholder="Enter Rating">
            <input type="submit" value="Add Item">
        </form>
    </section>
    `,
});

app.mount('#app');