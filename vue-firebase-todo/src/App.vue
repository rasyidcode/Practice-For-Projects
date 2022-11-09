<template>
  <div class=" p-3">
    <form>
      <label class=" mr-3 font-semibold">
        New Todo:
      </label>
      <input class=" border border-gray-300" v-model="newTodo" type="text" />
      <button type="submit" @click.prevent="addTodo()" class="
        bg-zinc-500 px-5 text-white tracking-wider
        uppercase ml-3 font-bold">Add</button>
    </form>

    <ul class=" mt-5 px-3 border divide-y">
      <li v-for="todo in todos" :key="todo.id" class=" py-3 flex justify-around">
        <div class=" flex-1 ">
          <h3 v-if="currentlyEditing != todo.id" @dblclick="currentlyEditing = todo.id;" class=" font-bold">{{ todo.text }}</h3>
          <input @keyup.enter="updateTodoText(todo)" v-else @focusout="updateTodoText(todo)" class=" border border-gray-300" v-model="todo.text" type="text" autofocus />
          <p><span class=" font-semibold text-rose-800">Created At</span>: {{ new Date(todo.createdAt.seconds * 1000).toString() }}</p>
        </div>
        <div class="flex flex-col justify-evenly">
          <input :checked="todo.completed" type="checkbox" v-model="todo.completed" @change="updateTodo(todo)">
          <button @click="deleteTodo(todo)" class=" bg-red-500 px-2 py-1 font-bold 
            text-white text-sm">delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { collection } from 'firebase/firestore/lite';
import { onSnapshot, collection, addDoc, orderBy, query, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from './fbase'

const todoCollection = collection(db, 'todos');

export default {
  name: 'App',
  mounted() {
      // listen for change
      const unsub = onSnapshot(query(todoCollection, orderBy('createdAt', 'desc')), (snapshot) => {
        snapshot.docChanges().forEach(change => {
          const { type, doc, oldIndex, newIndex } = change;
          if (type === 'added') {
            const todo = doc.data();
            todo.id = doc.id;

            this.todos.splice(newIndex, 0, todo);
          } else if (type === 'modified') {
            console.log('modified');
          } else if (type === 'removed') {
            console.log('removed');
            this.todos.splice(oldIndex, 1);
          }
        });
      }, (error) => {
        console.log(error)
        alert('something went wrong');
      });
  },
  data() {
    return {
      todos: [],
      newTodo: '',
      currentlyEditing: null,
    };
  },
  methods: {
    addTodo() {
      addDoc(todoCollection, {
        text: this.newTodo,
        completed: false,
        createdAt: new Date()
      })
        .then((docRef) => {
          console.log('Document created with ID: ', docRef.id);
          this.newTodo = '';
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    },

    updateTodo(todo) {
      updateDoc(doc(db, 'todos', todo.id), {...todo});
    },

    deleteTodo(todo) {
      deleteDoc(doc(db, 'todos', todo.id));
    },

    updateTodoText(todo) {
      updateDoc(doc(db, 'todos', todo.id), {...todo});
      this.currentlyEditing = null;
    }
  }
}
</script>