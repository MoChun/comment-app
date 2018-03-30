import React,{ Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor (){
        super()
        this.state={
            comments:[]
        }
    }
    _loadComments= () => {
        let comments = localStorage.getItem('comments')
        if(comments){
            comments.JSON.parse(comments)
            this.setState({comments})
        }
    }
    _saveComments=(comments: any) => {
        localStorage.setItem('comments',JSON.stringify(comments))

    }

    handleSubmitComment(comment){
        this.state.comments.push(comment)
        this.setState({
            comments:this.state.comments
        })
    }
    render(){
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp