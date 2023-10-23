<template>
  <div class="custom-component">
    <div class="content">
      <span class="label">限时五折优惠码</span>
      <button class="copy-button" @click="copyCode">点击复制</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomComponent",
  methods: {
    copyCode() {
      const code = "YOUR_DISCOUNT_CODE"; // 替换为你的优惠码
      navigator.clipboard.writeText(code)
        .then(() => {
          alert("优惠码已复制到剪贴板");
        })
        .catch((error) => {
          console.error("复制失败:", error);
        });
    },
  },
};
</script>

<style scoped>
.custom-component {
  background-color: blue;
  width: 100%;
  height: 64px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.label {
  color: white;
  font-size: 16px;
  margin-right: 10px;
}

.copy-button {
  background-color: white;
  color: blue;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>