import './style';
import React from 'react';

class Header extends React.PureComponent {

    /**
     * 返回上一页
     */
    clickHandler() {
        window.history.back();
    }

    render() {
        return (
            <div class="header">
                <i class="icon-arrow-left" onClick={this.clickHandler.bind(this)}></i>
                {this.props.children}
            </div>
        );
    }
}

export default Header;