import React from 'react';
import ReactSwipe from 'react-swipe';
import './style.scss';

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
                    <ul class="items">
                        <li>
                            <div><i class="icon-baobei1"></i></div>
                            <p>宝贝</p>
                        </li>
                        <li>
                            <div><i class="icon-nvzhuang"></i></div>
                            <p>女装</p>
                        </li>
                        <li>
                            <div><i class="icon-baobao"></i></div>
                            <p>宝宝</p>
                        </li>
                        <li>
                            <div><i class="icon-xiezi"></i></div>
                            <p>鞋子</p>
                        </li>
                        <li>
                            <div><i class="icon-peishi"></i></div>
                            <p>配饰</p>
                        </li>
                        <li>
                            <div><i class="icon-nanzhuang"></i></div>
                            <p>男装</p>
                        </li>
                        <li>
                            <div><i class="icon-yundonghuwai"></i></div>
                            <p>运动户外</p>
                        </li>
                        <li>
                            <div><i class="icon-shishang"></i></div>
                            <p>时尚</p>
                        </li>
                        <li>
                            <div><i class="icon-shuma"></i></div>
                            <p>数码</p>
                        </li>
                        <li>
                            <div><i class="icon-meirong"></i></div>
                            <p>美容</p>
                        </li>
                    </ul>
                    <ul class="items">
                        <li>
                            <div><i class="icon-meifa"></i></div>
                            <p>美发</p>
                        </li>
                        <li>
                            <div><i class="icon-jiaju"></i></div>
                            <p>家具</p>
                        </li>
                        <li>
                            <div><i class="icon-muying"></i></div>
                            <p>母婴</p>
                        </li>
                        <li>
                            <div><i class="icon-qinggan"></i></div>
                            <p>情感</p>
                        </li>
                        <li>
                            <div><i class="icon-meishi"></i></div>
                            <p>美食</p>
                        </li>
                        <li>
                            <div><i class="icon-DIY"></i></div>
                            <p>DIY</p>
                        </li>
                        <li>
                            <div><i class="icon-chongwu"></i></div>
                            <p>宠物</p>
                        </li>
                        <li>
                            <div><i class="icon-mingxing"></i></div>
                            <p>明星</p>
                        </li>
                        <li>
                            <div><i class="icon-gaoxiaoquwei"></i></div>
                            <p>搞笑趣味</p>
                        </li>
                        <li>
                            <div><i class="icon-sheyinglvxing"></i></div>
                            <p>摄影旅行</p>
                        </li>
                    </ul>
                    <ul class="items">
                        <li>
                            <div><i class="icon-dazahui"></i></div>
                            <p>大杂烩</p>
                        </li>
                        <li>
                            <div><i class="icon-dianpu"></i></div>
                            <p>店铺</p>
                        </li>
                        <li>
                            <div><i class="icon-baobei"></i></div>
                            <p>宝贝</p>
                        </li>
                        <li>
                            <div><i class="icon-tianhezuo"></i></div>
                            <p>天河座</p>
                        </li>
                        <li>
                            <div><i class="icon-juxiezuo"></i></div>
                            <p>巨蟹座</p>
                        </li>
                        <li>
                            <div><i class="icon-shizizuo"></i></div>
                            <p>狮子座</p>
                        </li>
                        <li>
                            <div><i class="icon-chunvzuo"></i></div>
                            <p>处女座</p>
                        </li>
                        <li>
                            <div><i class="icon-mojiezuo"></i></div>
                            <p>摩羯座</p>
                        </li>
                        <li>
                            <div><i class="icon-shuangyuzuo"></i></div>
                            <p>双鱼座</p>
                        </li>
                        <li>
                            <div><i class="icon-shuipingzuo"></i></div>
                            <p>水瓶座</p>
                        </li>
                    </ul>
                </ReactSwipe>
                <div className="index">
                    <li class={this.state.index === 0 ? 'active' : ''}></li>
                    <li class={this.state.index === 1 ? 'active' : ''}></li>
                    <li class={this.state.index === 2 ? 'active' : ''}></li>
                </div>
            </div>
        );
    }
}

export default Category;