// timeline.js

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.timeline-item');

    // IntersectionObserverを使用して、各アイテムがビューポートに入ったら表示する
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 一度表示したら監視を外してパフォーマンス向上
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => {
        observer.observe(item);
    });
});
