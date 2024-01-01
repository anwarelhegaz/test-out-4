// import './ChangeWords.css'
// import  { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';

// export default function ChangeWord() {

//     const [t, i18n] = useTranslation('global');
//     const isArabic = i18n.language === 'ar';
    
//     useEffect(() => {
//         let words = document.querySelectorAll(".word");
//         words.forEach((word) => {
//             let letters = word.textContent.split(/\/s+/);
//             word.textContent = "";
//             letters.forEach((letter) => {
//                 let span = document.createElement("span");
//                 span.textContent = letter;
//                 span.className = "letter";
//                 word.append(span);
//             });
//         });
    
//         let currentWordIndex = 0;
//         let maxWordIndex = words.length - 1;
//         words[currentWordIndex].style.opacity = "1";
    
//         let changeText = () => {
//             let currentWord = words[currentWordIndex];
//             let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
        
//             Array.from(currentWord.children).forEach((letter, i) => {
//                 setTimeout(() => {
//                 letter.className = "letter out";
//                 }, i * 80);
//             });
//             nextWord.style.opacity = "1";
//             Array.from(nextWord.children).forEach((letter, i) => {
//                 letter.className = "letter behind";
//                 setTimeout(() => {
//                 letter.className = "letter in";
//                 }, 340 + i * 80);
//             });
//             currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
//             };
    
//         changeText();
//         const interval = setInterval(changeText, 3000);
    
//         // Cleanup the interval on component unmount
//         return () => clearInterval(interval);
//         }, []);
        
//     return (
//     <>
//         <div className={`change-text ${isArabic ? 'arabic-dir' : ''}`}>
//             <h4 className=" font-bold "> {t('changeWords.title')}</h4>
//             <h4 className="">
//                 <span className="word">{t('changeWords.word1')}</span>
//                 <span className="word">{t('changeWords.word2')}</span>
//                 <span className="word">{t('changeWords.word3')}</span>
//                 <span className="word">{t('changeWords.word4')}</span>
//                 <span className="word">{t('changeWords.word5')}</span>
//                 <span className="word">{t('changeWords.word6')}</span>
//                 <span className="word">{t('changeWords.word7')}</span>
//             </h4>
//         </div>
//     </>
//     )
// }


import './ChangeWords.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function ChangeWord() {
    const [t, i18n] = useTranslation('global');
    const isArabic = i18n.language === 'ar';

    useEffect(() => {
        let words = document.querySelectorAll('.word');
        words.forEach((word) => {
        let text = word.textContent.split(/\/s+/);
        word.innerHTML = '';
        for (let letter of text) {
            let span = document.createElement('span');
            span.textContent = letter;
            span.className = 'letter';
            word.append(span);
        }
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = '1';

    let changeText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord =
            currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
            letter.className = 'letter out';
            }, i * 80);
        });

        nextWord.style.opacity = '1';
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = 'letter behind';
            setTimeout(() => {
            letter.className = 'letter in';
            }, 340 + i * 80);
        });

        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    changeText();
    const interval = setInterval(changeText, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
    }, [isArabic]);

    return (
        <>
            <div className={`change-text ${isArabic ? 'arabic-dir' : ''}`}>
                {/* <h4 className="font-bold "> {t('changeWords.title')}</h4> */}
                <h4 className="">
                    <span className="word">{t('changeWords.word1')}</span>
                    <span className="word">{t('changeWords.word2')}</span>
                    <span className="word">{t('changeWords.word3')}</span>
                    <span className="word">{t('changeWords.word4')}</span>
                    <span className="word">{t('changeWords.word5')}</span>
                    <span className="word">{t('changeWords.word6')}</span>
                    <span className="word">{t('changeWords.word7')}</span>
                </h4>
            </div>
        </>
    );
}

