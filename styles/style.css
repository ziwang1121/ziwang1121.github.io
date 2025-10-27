/* 基础样式 */
:root {
    --primary-color: #0e60b3;
    --secondary-color: #7f8c8d;
    --divider-thick: 3px solid var(--primary-color);
    --divider-thin: 1px solid #ecf0f1;
}

body {
    font-family: 'Open Sans', 'Source Han Sans', sans-serif;
    margin: 0;
    background-color: #f9f9f9;
}

/* 左侧菜单 */
.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;  /* 标签栏占满顶部宽度 */
    height: 60px; /* 设置标签栏的高度 */
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 10px 0;  /* 上下内边距 */
    display: flex;  /* 使用flex布局 */
    justify-content: center;  /* 横向居中对齐 */
    align-items: center;  /* 垂直居中对齐 */
    z-index: 1000; /* 确保标签栏在顶部 */
}

/* 2. 调整 .sidebar ul 和 .sidebar li 样式 */
.sidebar ul {
    list-style: none;
    padding: 0;
    display: flex;  /* 横向排列标签 */
    gap: 30px;  /* 标签之间的间距 */
    margin: 0;
}

.sidebar li {
    display: flex;  /* 使用 flex 布局 */
    align-items: center;  /* 垂直居中对齐 */
    justify-content: center;  /* 水平居中对齐 */
    padding: 8px 12px;
    border-radius: 4px;
    transition: background 0.3s;
}

.sidebar li:hover {
    background-color: #f4f4f4;
}

.sidebar li.active {
    background-color: var(--primary-color);
    font-weight: bold;  /* 设置加粗 */
}

.sidebar li.active a {
    color: white;
}

.sidebar a {
    color: var(--primary-color);
    text-decoration: none;
    font-size: 20px;
    text-align: center;  /* 文字居中对齐 */
}

/* 主内容区 */
.content {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    flex-direction: column; /* 如果你希望内容在垂直方向排列 */
    margin-top: 80px; /* 给正文部分顶部留出空间，使其不被标签栏遮挡 */
    padding: 40px;
    max-width: 800px;
    margin-left: auto;  /* 自动左右边距 */
    margin-right: auto; /* 自动左右边距 */
    width: 100%;  /* 确保宽度适应父容器 */
}

/* 其他共用样式... */

/* 个人信息部分 */
.profile-section {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

.profile {
    display: flex;
    align-items: center;
}

.profile-image {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}

.profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.profile-info h2 {
    margin: 0;
    font-size: 24px;
}

.divider-thin {
    border-top: 1px solid #4986c2;
    margin: 10px 0;
}

.divider-thin2 {
    border-top: 1px solid #a8aeb5;
    margin: 10px 0;
}

.divider-thick {
    border-top: 2px solid #ddd;
    margin: 20px 0;
}

/* 基本信息部分 */
/* 标题顶格 */
section h2 {
    color: #0e60b3;
    text-align: left;
    margin-bottom: 10px;  /* 控制标题和内容之间的间距 */
}

/* 内容空两格开始 */
section p {
    width: 100%;
    /* text-indent: 2em;  设置段落内容首行缩进两格 */
    font-size: 16px;   /* 可以根据需要调整字体大小 */
    line-height: 1.5;  /* 调整行间距 */
}



section a {
    text-indent: 2em;  /* 设置段落内容首行缩进两格 */
    color: #1abc9c;
    text-decoration: none;
    /* margin-bottom: 30px; */
}

section a:hover {
    text-decoration: underline;
}

/* 联系信息部分，水平排列并调整间距 */
.contact-info {
    display: flex;                  /* 使用flexbox进行布局 */
    align-items: center;            /* 垂直居中对齐 */
    gap: 60px;                      /* 控制项目之间的间距，单位可以根据需要调整 */
}

.contact-info a {
    color: #1abc9c;
    text-decoration: none;
}

.contact-info a:hover {
    text-decoration: underline;
}


/* 表格样式 */
table {
    width: 100%;
    border-collapse: collapse;  /* 合并表格边框 */
    margin-bottom: 20px;         /* 表格底部间距 */
}

th, td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;     /* 设置边框 */
}

th {
    background-color: #f4f4f4;  /* 设置表头背景色 */
    font-weight: bold;           /* 设置表头加粗 */
}

tr:nth-child(even) {
    background-color: #f9f9f9;  /* 设置偶数行的背景色 */
}

tr:hover {
    background-color: #f1f1f1;  /* 设置鼠标悬停时的行背景色 */
}

/* Paper Item样式 */
.paper-item {
    margin-bottom: 20px;  /* 项目之间的间距 */
}

.paper-date {
    font-size: 14px;
    color: #888;         /* 日期文字颜色 */
    margin-right: 10px;   /* 日期和标题之间的间距 */
}

.paper-title {
    font-size: 14px;
    font-weight: bold;    /* 论文标题加粗 */
    color: #1abc9c;       /* 论文标题颜色 */
    text-decoration: none; /* 取消标题的下划线 */
}

.paper-title:hover {
    text-decoration: underline; /* 鼠标悬停时加下划线 */
}

.github-link {
    font-size: 16px;
    margin-left: 15px;
    color: #333;          /* GitHub链接颜色 */
    text-decoration: none; /* 取消链接下划线 */
}

.github-link:hover {
    color: #1abc9c;       /* GitHub链接悬停时的颜色 */
}




/* 图片容器样式 */
/* 图片容器 */
.images-container {
    display: flex;

    align-items: center;      /* 纵向居中 */
    gap: 10px;
    flex-wrap: wrap;          /* 如果图片数量过多，换行 */
}


.image-wrapper {
    position: relative;
    margin-bottom: 30px;
}

.image {
    max-width: 100%;
    height: auto;
    /* border-radius: 8px; */
    transition: transform 0.3s ease;
    
}

/* 显示按钮样式 */
.show-btn {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    padding: 3px 13px;
    background-color: #f9f9f9;
    color: rgb(94, 94, 94);
    border: none;
    /* border-radius: 4px; */
    cursor: pointer;
    transition: all 0.3s ease;
}

.show-btn:hover {
    background-color: rgba(148, 148, 148, 0.9);
}

/* 放大显示层样式 */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(98, 98, 98, 0.9);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.zoomed-image {
    max-width: 90%;
    max-height: 90%;
    /* border-radius: 8px; */
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}
