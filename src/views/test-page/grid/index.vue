<template lang="">
  <div>
    <h1>gird布局的使用</h1>
    <div class="container">
      <div class="item">1</div>
      <div class="item twoCol">2</div>
      <div class="item twoRow">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.container {
  display: grid;
  border: 1px solid red;

  // 声明几行几列 3 * 3
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  // 声明行间距和列间距
  grid-gap: 20px;
  // 居中设置 如果设置了item里面的外面就不用设置了
  .item {
    width: auto;
    height: 100px;
    // 如果设置了居中就会破坏width的自动设置
    background-color: aquamarine;
    &:nth-child(2n) {
      background-color: rgb(186, 186, 201);
    }
  }
  // 占两列
  .twoCol {
    grid-column-start: 2;
    grid-column-end: 4;
  }
  .twoRow {
    grid-row-start: 2;
    grid-row-end: 4;
  }
}
</style>
