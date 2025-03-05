document.addEventListener('DOMContentLoaded', function () {
    // タイムラインの全アイテムを取得
    const items = document.querySelectorAll('.timeline-item');

    // IntersectionObserver を使用して、アイテムがビューポートに入ったら表示
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // 一度表示したら監視を外す（パフォーマンス向上）
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2, // アイテムの20%が見えたら発火
        }
    );

    // 各アイテムを監視
    items.forEach((item) => {
        observer.observe(item);
    });
});
