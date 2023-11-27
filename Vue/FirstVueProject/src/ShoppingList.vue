<template>
  <div>
    <header>
      <h2>Shopping List</h2>
    </header>
    <input type="text" ref="inputValue" v-model="inputValue" @keyup.enter="addItem" />
    <button @click="addItem" class="add-button">Add Item</button>
    <ul>
      <li v-for="(item, i) in shoppingList" :key="i">
        {{ item }}
        <button @click="deleteItem(i)">Delete</button>
        <button @click="editItem(i)">Delete</button>
      </li>
    </ul>
    <Button @click="deleteItem(-1)"></Button>
  </div>
</template>
<script>
export default {
  methods: {
    addItem() {
      if (this.inputValue != '') {
        this.shoppingList.push(this.inputValue)

        this.inputValue = ''
      }
      console.log(this.shoppingList)
    },
    deleteItem(i) {
      this.shoppingList = i ? this.shoppingList.filter((item, x) => x !== i) : []
    },
    editItem(i) {
      this.shoppingList.forEach((item, k) => {
        if (i === k) {
          let newValue = prompt(`current Value: ${item}`)
          this.shoppingList.splice(k, 1, newValue)
        }
      })
    }
  }
}
</script>
<style></style>
