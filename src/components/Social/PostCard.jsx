import React from 'react';

function PostCard({ post }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-4 space-y-4">
            
            <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${post.avatarColor} flex items-center justify-center text-white text-2xl font-black select-none`}>
                    {post.avatarInitial}
                </div>
                
                <div>
                    <p className="font-semibold text-md">
                        {post.userName} <span className="text-gray-500 font-normal">{post.actionText}</span> {post.targetName}
                    </p>
                    <p className="text-xs text-gray-500">
                        {post.timeAgo}
                    </p>
                </div>
            </div>

            {post.content && (
                <p className="text-gray-700 text-sm pt-2 px-4">
                    {post.content}
                </p>
            )}

            {post.image && (
                <div className="px-4">
                    <img 
                        className="rounded-xl w-full pt-2" 
                        src={post.image} 
                        alt="Post content" 
                    />
                </div>
            )}

            <div className="flex justify-between text-sm text-gray-500 pt-2 px-4 border-t">
                <button className="hover:text-green-500 font-medium transition-colors">❤️ Like</button>
                <button className="hover:text-green-500 font-medium transition-colors">💬 Comment</button>
                <button className="hover:text-green-500 font-medium transition-colors">🔁 Share</button>
            </div>

            <p className="text-xs text-gray-500 px-4">
                Liked by <span className="font-semibold">{post.likedBy || "someone"}</span> and others
            </p>
            
        </div>
    );
}

export default PostCard;