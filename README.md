# My React Todo List

一個使用 React 與 Vite 製作的待辦事項管理工具。使用者可以新增、完成、編輯與刪除待辦事項，資料會保存在瀏覽器的 `localStorage`，因此重新整理頁面後仍然可以保留。

## 功能

- 新增待辦事項
- 點擊待辦事項切換完成／未完成狀態
- 完成的事項會變暗並顯示刪除線
- 編輯待辦事項內容
- 取消編輯或儲存編輯結果
- 刪除待辦事項
- 使用 `localStorage` 保存資料
- 使用 React Hooks 管理元件狀態與副作用
- 使用 React Icons 顯示編輯與刪除圖示
- 使用 ESLint 檢查程式碼

## 使用技術

### 主要技術

- [React](https://react.dev/) `19.3.1`：建立使用者介面與元件
- [Vite](https://vite.dev/) `8.3.6`：開發伺服器與前端建置工具
- JavaScript：撰寫元件與功能邏輯
- CSS：頁面排版、顏色與完成狀態樣式

### 使用套件

- `react`：React 核心套件
- `react-dom`：將 React 渲染到瀏覽器 DOM
- `react-icons`：提供編輯與刪除圖示
- `@vitejs/plugin-react`：讓 Vite 支援 React
- `eslint`：JavaScript 與 React 程式碼檢查
- `eslint-plugin-react-hooks`：檢查 React Hooks 使用方式
- `eslint-plugin-react-refresh`：支援 React Fast Refresh 檢查
- `@eslint/js`：ESLint 基本規則
- `globals`：提供瀏覽器全域變數設定

## 開始使用

### 環境需求

- Node.js
- npm

### 安裝專案

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

啟動後，使用終端機顯示的網址開啟網站，通常是：

```text
http://localhost:5173
```

### 執行程式碼檢查

```bash
npm run lint
```

### 建立正式版本

```bash
npm run build
```

建置結果會輸出到 `dist` 資料夾。

### 預覽正式版本

先執行建置，再啟動預覽伺服器：

```bash
npm run build
npm run preview
```

## 專案結構

```text
my-react-todoList/
├─ public/                 # 靜態資源
├─ src/
│  ├─ component/
│  │  ├─ CreateForm.jsx    # 新增待辦事項的表單
│  │  ├─ Editform.jsx      # 編輯待辦事項的表單
│  │  ├─ Todo.jsx          # 單筆待辦事項元件
│  │  └─ TodoWrapper.jsx   # 待辦清單狀態與主要功能
│  ├─ App.css              # 全域樣式與待辦事項樣式
│  ├─ App.jsx              # App 根元件
│  └─ main.jsx             # React 應用程式進入點
├─ index.html              # HTML 入口頁面
├─ eslint.config.js        # ESLint 設定
├─ vite.config.js          # Vite 設定
├─ package.json            # 專案資訊、指令與套件
└─ README.md               # 專案說明文件
```

## 資料保存方式

待辦事項會以 JSON 格式保存於瀏覽器的 `localStorage`，使用的 key 是：

```text
todos
```

因此資料只會保存在目前瀏覽器與目前網站來源中，不會同步到其他裝置，也沒有使用後端資料庫。清除瀏覽器網站資料後，保存的待辦事項也會被清除。

## 狀態欄位

每筆待辦事項的資料格式如下：

```js
{
  content: "待辦事項內容",
  id: 123456789,
  isCompleted: false,
  isEditing: false
}
```

- `content`：待辦事項文字
- `id`：每筆資料的唯一識別值
- `isCompleted`：是否已完成
- `isEditing`：是否正在編輯

## npm scripts

| 指令 | 說明 |
| --- | --- |
| `npm run dev` | 啟動 Vite 開發伺服器 |
| `npm run build` | 建立正式版本 |
| `npm run lint` | 執行 ESLint 檢查 |
| `npm run preview` | 預覽正式建置結果 |

## 注意事項

- 本專案目前使用瀏覽器 `localStorage`，沒有登入、後端 API 或資料庫。
- 不同瀏覽器之間不會共享待辦事項資料。
- 若要清除目前保存的所有資料，可以在瀏覽器開發者工具執行：

```js
localStorage.removeItem("todos");
```
