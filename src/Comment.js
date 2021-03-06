import React, {Component} from 'react'


class Comment extends Component {

    constructor (){
        super()
        this.state= {
            timeString:''
        }
    }
    componentWillMount () {
        this._updateTimeString ()
        this._timer=setInterval(
            this._updateTimeString.bind(this),5000
        )

    }
    componentWillUnmount () {
        clearInterval(this._timer)
    }

    _updateTimeString(){
        debugger
        const comment = this.props.comment
        const duration =(+Date.now() - comment.createdTime)/1000
        this.setState({
            timeString: duration > 60?
                `${Math.round(duration / 60)} min ago` : `${Math.round(Math.max(duration, 1))} sec ago`
        })
    }



    render () {
        return(
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}</span> :
                </div>
                <p>{this.props.comment.content}</p>
                <span className="comment-createdtime">
                    {this.state.timeString}
                </span>


            </div>
        )
    }
}

export default Comment