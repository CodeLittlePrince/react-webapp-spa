import './style.scss';
import React from 'react';
import ReactSwipe from 'react-swipe';

class Category extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }
    render() {
        const settings = {
            auto: 2500,
            callback: index => {                
                this.setState({ index: index }); // 更新当前轮播图的index
            }
        };
        return (
            <div class="home-category">
                <ReactSwipe className="carousel" swipeOptions={settings}>
                    <div class="items">
                        <img src="http://ou41niivx.bkt.clouddn.com/banner-1.png?imageView2/2/w/500" alt="banner1"/>
                    </div>
                    <div class="items">
                        <img src="http://ou41niivx.bkt.clouddn.com/banner-2.png?imageView2/2/w/500" alt="banner2" />
                    </div>
                    <div class="items">
                        <img src="http://ou41niivx.bkt.clouddn.com/banner-3.png?imageView2/2/w/500" alt="banner3"/>
                    </div>
                    <div class="items">
                        <img src="http://ou41niivx.bkt.clouddn.com/banner-4.png?imageView2/2/w/500" alt="banner4"/>
                    </div>
                    <div class="items">
                        <img src="http://ou41niivx.bkt.clouddn.com/banner-5.png?imageView2/2/w/500" alt="banner5"/>
                    </div>
                </ReactSwipe>
                <div className="index">
                    <li class={this.state.index === 0 ? 'active' : ''}></li>
                    <li class={this.state.index === 1 ? 'active' : ''}></li>
                    <li class={this.state.index === 2 ? 'active' : ''}></li>
                    <li class={this.state.index === 3 ? 'active' : ''}></li>
                    <li class={this.state.index === 4 ? 'active' : ''}></li>
                </div>
            </div>
        );
    }
}

export default Category;