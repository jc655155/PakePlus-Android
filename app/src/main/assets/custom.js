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
                const element0 = document.querySelector('// 強力廣告阻擋系統
(function() {
    'use strict'');
                if (element0) {
                    element0.style.display = 'none';
                };const element1 = document.querySelector('
    
    // 阻擋所有彈出視窗
    window.open = function() { return null');
                if (element1) {
                    element1.style.display = 'none';
                };const element2 = document.querySelector(' }');
                if (element2) {
                    element2.style.display = 'none';
                };const element3 = document.querySelector('
    window.alert = function() { return null');
                if (element3) {
                    element3.style.display = 'none';
                };const element4 = document.querySelector(' }');
                if (element4) {
                    element4.style.display = 'none';
                };const element5 = document.querySelector('
    window.confirm = function() { return true');
                if (element5) {
                    element5.style.display = 'none';
                };const element6 = document.querySelector(' }');
                if (element6) {
                    element6.style.display = 'none';
                };const element7 = document.querySelector('
    
    // 強力廣告元素移除
    function nukeAds() {
        const selectors = [
            // 通用廣告選擇器
            'div[class*="ad"]', 'div[id*="ad"]', 'span[class*="ad"]',
            'div[class*="popup"]', 'div[id*="popup"]',
            'div[class*="modal"]', 'div[id*="modal"]',
            'div[class*="overlay"]', 'div[id*="overlay"]',
            'div[class*="banner"]', 'div[id*="banner"]',
            // 固定定位元素（通常是彈窗）
            'div[style*="position: fixed"]',
            'div[style*="position:fixed"]',
            'div[style*="z-index: 999"]',
            'div[style*="z-index:999"]',
            // 常見廣告標籤
            'iframe[src*="ads"]', 'iframe[src*="ad"]',
            'embed', 'object',
            // 特定廣告類名
            '.advertisement', '.ad-banner', '.ad-container',
            '.promo', '.sponsored', '.ads-wrapper'
        ]');
                if (element7) {
                    element7.style.display = 'none';
                };const element8 = document.querySelector('
        
        selectors.forEach(sel => {
            try {
                document.querySelectorAll(sel).forEach(el => {
                    el.style.display = 'none !important'');
                if (element8) {
                    element8.style.display = 'none';
                };const element9 = document.querySelector('
                    el.style.visibility = 'hidden !important'');
                if (element9) {
                    element9.style.display = 'none';
                };const element10 = document.querySelector('
                    el.remove()');
                if (element10) {
                    element10.style.display = 'none';
                };const element11 = document.querySelector('
                })');
                if (element11) {
                    element11.style.display = 'none';
                };const element12 = document.querySelector('
            } catch(e) {}
        })');
                if (element12) {
                    element12.style.display = 'none';
                };const element13 = document.querySelector('
        
        // 移除高z-index元素
        document.querySelectorAll('*').forEach(el => {
            const zIndex = window.getComputedStyle(el).zIndex');
                if (element13) {
                    element13.style.display = 'none';
                };const element14 = document.querySelector('
            if (zIndex > 1000) {
                el.remove()');
                if (element14) {
                    element14.style.display = 'none';
                };const element15 = document.querySelector('
            }
        })');
                if (element15) {
                    element15.style.display = 'none';
                };const element16 = document.querySelector('
    }
    
    // 遙控器支援
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' || e.keyCode === 27 || e.key === 'Back') {
            // 強制關閉所有彈窗
            document.querySelectorAll('div').forEach(el => {
                const style = window.getComputedStyle(el)');
                if (element16) {
                    element16.style.display = 'none';
                };const element17 = document.querySelector('
                if (style.position === 'fixed' || style.zIndex > 100) {
                    el.remove()');
                if (element17) {
                    element17.style.display = 'none';
                };const element18 = document.querySelector('
                }
            })');
                if (element18) {
                    element18.style.display = 'none';
                };const element19 = document.querySelector('
        }
    })');
                if (element19) {
                    element19.style.display = 'none';
                };const element20 = document.querySelector('
    
    // 立即執行
    nukeAds()');
                if (element20) {
                    element20.style.display = 'none';
                };const element21 = document.querySelector('
    
    // 定期清理
    setInterval(nukeAds, 300)');
                if (element21) {
                    element21.style.display = 'none';
                };const element22 = document.querySelector('
    
    // 監控DOM變化
    if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(nukeAds)');
                if (element22) {
                    element22.style.display = 'none';
                };const element23 = document.querySelector('
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true
        })');
                if (element23) {
                    element23.style.display = 'none';
                };const element24 = document.querySelector('
    }
})()');
                if (element24) {
                    element24.style.display = 'none';
                };const element25 = document.querySelector('
// 遙控器導航優化
(function() {
    let currentFocus = 0');
                if (element25) {
                    element25.style.display = 'none';
                };const element26 = document.querySelector('
    let focusableElements = []');
                if (element26) {
                    element26.style.display = 'none';
                };const element27 = document.querySelector('
    
    // 找到所有可聚焦元素
    function updateFocusableElements() {
        focusableElements = Array.from(document.querySelectorAll(
            'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"]), ' +
            '.clickable, [onclick], [href], video, .play-button'
        )).filter(el => {
            const style = window.getComputedStyle(el)');
                if (element27) {
                    element27.style.display = 'none';
                };const element28 = document.querySelector('
            return style.display !== 'none' && style.visibility !== 'hidden'');
                if (element28) {
                    element28.style.display = 'none';
                };const element29 = document.querySelector('
        })');
                if (element29) {
                    element29.style.display = 'none';
                };const element30 = document.querySelector('
        
        // 為元素添加視覺焦點樣式
        focusableElements.forEach((el, index) => {
            el.setAttribute('data-focus-index', index)');
                if (element30) {
                    element30.style.display = 'none';
                };const element31 = document.querySelector('
            el.style.outline = 'none'');
                if (element31) {
                    element31.style.display = 'none';
                };const element32 = document.querySelector('
        })');
                if (element32) {
                    element32.style.display = 'none';
                };const element33 = document.querySelector('
    }
    
    // 設置焦點樣式
    function setFocus(index) {
        // 移除舊焦點
        focusableElements.forEach(el => {
            el.style.border = ''');
                if (element33) {
                    element33.style.display = 'none';
                };const element34 = document.querySelector('
            el.style.backgroundColor = ''');
                if (element34) {
                    element34.style.display = 'none';
                };const element35 = document.querySelector('
            el.style.transform = ''');
                if (element35) {
                    element35.style.display = 'none';
                };const element36 = document.querySelector('
        })');
                if (element36) {
                    element36.style.display = 'none';
                };const element37 = document.querySelector('
        
        if (focusableElements[index]) {
            const el = focusableElements[index]');
                if (element37) {
                    element37.style.display = 'none';
                };const element38 = document.querySelector('
            // 添加明顯的焦點樣式
            el.style.border = '3px solid #ff6600'');
                if (element38) {
                    element38.style.display = 'none';
                };const element39 = document.querySelector('
            el.style.backgroundColor = 'rgba(255, 102, 0, 0.2)'');
                if (element39) {
                    element39.style.display = 'none';
                };const element40 = document.querySelector('
            el.style.transform = 'scale(1.05)'');
                if (element40) {
                    element40.style.display = 'none';
                };const element41 = document.querySelector('
            
            // 滾動到可見區域
            el.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center',
                inline: 'center'
            })');
                if (element41) {
                    element41.style.display = 'none';
                };const element42 = document.querySelector('
            
            currentFocus = index');
                if (element42) {
                    element42.style.display = 'none';
                };const element43 = document.querySelector('
        }
    }
    
    // 遙控器按鍵處理
    document.addEventListener('keydown', function(e) {
        updateFocusableElements()');
                if (element43) {
                    element43.style.display = 'none';
                };const element44 = document.querySelector('
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault()');
                if (element44) {
                    element44.style.display = 'none';
                };const element45 = document.querySelector('
                currentFocus = Math.min(currentFocus + 1, focusableElements.length - 1)');
                if (element45) {
                    element45.style.display = 'none';
                };const element46 = document.querySelector('
                setFocus(currentFocus)');
                if (element46) {
                    element46.style.display = 'none';
                };const element47 = document.querySelector('
                break');
                if (element47) {
                    element47.style.display = 'none';
                };const element48 = document.querySelector('
                
            case 'ArrowUp':
                e.preventDefault()');
                if (element48) {
                    element48.style.display = 'none';
                };const element49 = document.querySelector('
                currentFocus = Math.max(currentFocus - 1, 0)');
                if (element49) {
                    element49.style.display = 'none';
                };const element50 = document.querySelector('
                setFocus(currentFocus)');
                if (element50) {
                    element50.style.display = 'none';
                };const element51 = document.querySelector('
                break');
                if (element51) {
                    element51.style.display = 'none';
                };const element52 = document.querySelector('
                
            case 'ArrowLeft':
                e.preventDefault()');
                if (element52) {
                    element52.style.display = 'none';
                };const element53 = document.querySelector('
                // 在同一行中向左移動
                const currentEl = focusableElements[currentFocus]');
                if (element53) {
                    element53.style.display = 'none';
                };const element54 = document.querySelector('
                if (currentEl) {
                    const currentRect = currentEl.getBoundingClientRect()');
                if (element54) {
                    element54.style.display = 'none';
                };const element55 = document.querySelector('
                    for (let i = currentFocus - 1');
                if (element55) {
                    element55.style.display = 'none';
                };const element56 = document.querySelector(' i >= 0');
                if (element56) {
                    element56.style.display = 'none';
                };const element57 = document.querySelector(' i--) {
                        const rect = focusableElements[i].getBoundingClientRect()');
                if (element57) {
                    element57.style.display = 'none';
                };const element58 = document.querySelector('
                        if (Math.abs(rect.top - currentRect.top) < 50 && rect.left < currentRect.left) {
                            setFocus(i)');
                if (element58) {
                    element58.style.display = 'none';
                };const element59 = document.querySelector('
                            break');
                if (element59) {
                    element59.style.display = 'none';
                };const element60 = document.querySelector('
                        }
                    }
                }
                break');
                if (element60) {
                    element60.style.display = 'none';
                };const element61 = document.querySelector('
                
            case 'ArrowRight':
                e.preventDefault()');
                if (element61) {
                    element61.style.display = 'none';
                };const element62 = document.querySelector('
                // 在同一行中向右移動
                const currentElRight = focusableEleme');
                if (element62) {
                    element62.style.display = 'none';
                }
            }
        }
    })
    observer.observe(targetNode, config)
})
// end css filter
