var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];


//以一种模块化的方式将这个数据传入到 CommentList。
//修改 CommentBox 和 ReactDOM.render() 方法，以通过 props 传入数据到 CommentList：
var CommentBox = React.createClass({
    render: function(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        )
    }
});

var CommentList = React.createClass({
    render: function(){
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            )
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }
});

var Comment = React.createClass({
    render: function(){
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        )
    }
});

var CommentForm = React.createClass({
    render: function(){
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        )
    }
});

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content')
);