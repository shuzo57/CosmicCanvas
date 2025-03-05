document.addEventListener('DOMContentLoaded', function () {
    // 1. Vanta.js 背景設定
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff6f61,       // ネットの色（お好みで変更）
        backgroundColor: 0x000000, // 背景色（全体が黒っぽくなる）
        points: 12.0,         // 点の数
        maxDistance: 20.0,    // 線の距離
        spacing: 18.0         // 点の間隔
    });

    // 2. IntersectionObserver でタイムライン項目をフェードイン
    const items = document.querySelectorAll('.dial-item');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // dial-item に visible クラスを付与してフェードイン
                    entry.target.classList.add('visible');

                    // dial-circle を取得して spin クラスを付与（くるくる回転）
                    const circle = entry.target.querySelector('.dial-circle');
                    if (circle) {
                        circle.classList.add('spin');
                    }

                    // 一度アニメーションを発火したら監視を外す
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2, // 要素の20%が見えたらアニメーションを開始
        }
    );

    items.forEach((item) => {
        observer.observe(item);
    });
});
