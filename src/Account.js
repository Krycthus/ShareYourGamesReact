import React, { Component } from 'react'

class Account extends Component {
    render() {
        return (
            <ul class='collapsible popout' data-collapsible='expandable'>
                <li>
                    <div class='collapsible-header'><i class='material-icons'>filter_drama</i>First</div>
                    <div class='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div class='collapsible-header'><i class='material-icons'>place</i>Second</div>
                    <div class='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div class='collapsible-header'><i class='material-icons'>whatshot</i>Third</div>
                    <div class='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>
        )
    }
}

export default Account



