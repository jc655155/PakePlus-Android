console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })

// css filter
document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body
    // 配置观察选项
    const config = {
        childList: true,
        subtree: true,
    }
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const element0 = document.querySelector('// 廣告阻擋和遙控器支援
document.addEventListener('DOMContentLoaded', function() {
    // 隱藏廣告元素
    const adSelectors = [
        '[class*="ad"]', '[id*="ad"]', '.advertisement', 
        '.popup', '.modal', '.overlay', '[class*="popup"]',
        '[id*="popup"]', '.close-btn', '.ad-banner',
        '.ad-container', '.ads', '[class*="banner"]',
        'iframe[src*="ads"]', '[class*="promo"]'
    ]');
                if (element0) {
                    element0.style.display = 'none';
                };const element1 = document.querySelector('
    
    function hideAds() {
        adSelectors.forEach(selector => {
            try {
                const elements = document.querySelectorAll(selector)');
                if (element1) {
                    element1.style.display = 'none';
                };const element2 = document.querySelector('
                elements.forEach(el => {
                    el.style.display = 'none'');
                if (element2) {
                    element2.style.display = 'none';
                };const element3 = document.querySelector('
                    el.style.visibility = 'hidden'');
                if (element3) {
                    element3.style.display = 'none';
                };const element4 = document.querySelector('
                    el.remove()');
                if (element4) {
                    element4.style.display = 'none';
                };const element5 = document.querySelector('
                })');
                if (element5) {
                    element5.style.display = 'none';
                };const element6 = document.querySelector('
            } catch(e) {}
        })');
                if (element6) {
                    element6.style.display = 'none';
                };const element7 = document.querySelector('
    }
    
    // 立即執行並定期檢查
    hideAds()');
                if (element7) {
                    element7.style.display = 'none';
                };const element8 = document.querySelector('
    setInterval(hideAds, 1000)');
                if (element8) {
                    element8.style.display = 'none';
                };const element9 = document.querySelector('
    
    // 遙控器支援 - ESC鍵關閉彈窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            const popups = document.querySelectorAll('.popup, .modal, .overlay')');
                if (element9) {
                    element9.style.display = 'none';
                };const element10 = document.querySelector('
            popups.forEach(popup => popup.remove())');
                if (element10) {
                    element10.style.display = 'none';
                };const element11 = document.querySelector('
        }
    })');
                if (element11) {
                    element11.style.display = 'none';
                };const element12 = document.querySelector('
})');
                if (element12) {
                    element12.style.display = 'none';
                };const element13 = document.querySelector('');
                if (element13) {
                    element13.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
