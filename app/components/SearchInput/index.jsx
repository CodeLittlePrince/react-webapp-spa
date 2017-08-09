import './style';
import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    
    // 点击searchInput内，都focus输入框
    clickHandler() {
        this.refs.input.focus();
    }

    // 输入回车后，submit
    keyUpHandler(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    }

    // 受控组件处理
    changeHandler(e) {
        let value = e.target.value;
        this.setState({
            value
        });
    }
    
    render() {
        return (
            <div class="searchInput" onClick={this.clickHandler.bind(this)}>
                <form action="#" onSubmit={this.keyUpHandler.bind(this)}>
                    <div class="search">
                        <i className="icon-search"></i>
                        <input type="search" placeholder="请输入关键字..." ref="input"
                            value={this.state.value}
                            onChange={this.changeHandler.bind(this)}/>
                    </div>
                </form>
            </div>
        );
    }
}

SearchInput.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default SearchInput;