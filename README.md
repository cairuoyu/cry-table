# cry-table
https://www.npmjs.com/package/cry-table
---
一个基于vue、element-ui的表格组件demo

![image](./public/demo1.png)
## 功能
* 行内编辑
* 行内级联下拉
* 行内自定义显示隐藏按钮
* 隐藏显示列

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
http://localhost:8082/

## 例子
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
