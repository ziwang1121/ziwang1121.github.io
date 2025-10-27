document.addEventListener('DOMContentLoaded', function() {
    // 获取所有显示按钮
    const showButtons = document.querySelectorAll('.show-btn');
    const overlay = document.getElementById('overlay');
    const zoomedImage = document.getElementById('zoomed-image');

    // 为每个按钮添加点击事件
    showButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 获取对应的图片
            const img = this.previousElementSibling;
            
            // 设置放大图片的src
            zoomedImage.src = img.src;
            
            // 显示放大层
            overlay.style.display = 'flex';
        });
    });

    // 点击任意位置关闭放大
    overlay.addEventListener('click', function() {
        this.style.display = 'none';
    });

    // 防止点击图片时冒泡关闭
    zoomedImage.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

