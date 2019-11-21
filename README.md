# cry-table
https://www.npmjs.com/package/cry-table
---
一个基于vue、element-ui的表格组件demo

![image](./public/demo1.png)
## 安装
```bash
npm i
或者
yarn
```

## 运行
```bash
npm run dev
```

## 访问
http://localhost:9090/

## 最简使用
```html
<template>
  <cry-table :listConfig="listConfig" :listData="listData" />
</template>

<script>
export default {
  data() {
    return {
      listData: [],
      listConfig: {
        columns: [
          { prop: 'country', label: '国家' },
          { prop: 'province', label: '省份' },
          { prop: 'city', label: '城市' }
        ]
      }
    }
  },
  created() {
    this.listData = [
      {
        country: '中国',
        province: '广东省',
        city: '广州市'
      }
    ]
  }
}
</script>
```
