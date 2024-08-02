
import  React, { useEffect } from 'react';
import './index.css';


const BannerComponent = () => {
    useEffect(() => {
        const top = window.scrollY;
        const listBg = document.querySelectorAll('.bg');
        const listTab = document.querySelectorAll('.tab');
        const titleBanner = document.querySelector('.banner h1');

        const handleScroll = () => {
            const top = window.scrollY;

            listBg.forEach((bg, index) => {
                if(index !== 0 && index !== 8){
                    bg.style.transform = `translateY(${(top * index / 2)}px)`;
                } 
                else if (index === 0 ){
                    bg.style.transform = `translateY(${(top / 3)}px)`;
                }
            });

            titleBanner.style.transform = `translateY(${(top * 4 / 2)}px)`;

            listTab.forEach(tab => {
                if (tab.offsetTop - top < 550) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="banner">
                <div className="bg bg-1"></div>
                <div className="bg bg-2"></div>
                <div className="bg bg-3"></div>
                <h1>Lun Dev!</h1>
                <div className="bg bg-4"></div>
                <div className="bg bg-5"></div>
                <div className="bg bg-6"></div>
                <div className="bg bg-7"></div>
                <div className="bg bg-8"></div>
                <div className="bg bg-9"></div>
            </div>

            <div className="tab intro">
                <h2 className="animation-show">Lu Dev</h2>
                <img src="./src/img/logo.jpg" alt="Logo" className="animation-show" />
                <p className="animation-show">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque rem obcaecati libero eaque veniam est necessitatibus consectetur commodi non rerum, sapiente distinctio dignissimos! Dolorem eaque velit quam tenetur sapiente, qui veniam iste beatae officiis facilis aut expedita commodi, voluptatibus ullam voluptates! Explicabo, nisi. Odit, neque aliquid maiores minima cumque iusto?
                </p>
                <button className="animation-show">Subscribe</button>
            </div>

            <div className="tab library">
                <div className="animation-show">
                    <img src="./src/img/9.jpg" alt="Image 9" />
                    <p>Image Name</p>
                </div>
                <div className="animation-show">
                    <img src="./src/img/10.jpg" alt="Image 10" />
                    <p>Image Name</p>
                </div>
                <div className="animation-show">
                    <img src="./src/img/11.jpg" alt="Image 11" />
                    <p>Image Name</p>
                </div>
                <div className="animation-show">
                    <img src="./src/img/12.jpg" alt="Image 12" />
                    <p>Image Name</p>
                </div>
            </div>
        </div>
    );
};

export default BannerComponent;
