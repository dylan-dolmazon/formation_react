import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './TemplateName.module.scss'
const TemplateNameInitialState={};
class TemplateName extends Component {

    constructor(props){
        super(props);
        this.state= TemplateNameInitialState;
    }
    render() {
        return (
            <div className={style.TemplateName} data-testid="TemplateName">
                templateName
            </div>
        );
    }
}

TemplateName.propTypes = {
};
TemplateName.defaultProps= {
};
export default TemplateName;