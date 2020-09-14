import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from "./StoryReel"

function Feed() {
    return <div className="feed">
        <StoryReel />
        <MessageSender />

        <Post 
            profilePic='https://avatars0.githubusercontent.com/u/58092741?s=460&u=9046787a44c4aa8e703772d366ab9eadfc61d665&v=4'
            message='Mensaje de Prueba'
            timestamp='This is the timestamp'
            username='William Monroy'
            image='https://scontent.faqp2-2.fna.fbcdn.net/v/t1.0-9/41752333_1911828758907646_7135101075740164096_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_eui2=AeE3pQjX5Wl0xEPGdETs0hjekvZRRbJ8HOOS9lFFsnwc41n0BOhcbzVqeCAveUvqxcV6OWxebp_avpV78X4Pgxs9&_nc_ohc=e5C_wuNxgHwAX-Yu6Zz&_nc_ht=scontent.faqp2-2.fna&oh=ef4238eb2b34bb30411faa11ad77cd1f&oe=5F82976F'
        />
        <Post 
            profilePic='https://avatars0.githubusercontent.com/u/58092741?s=460&u=9046787a44c4aa8e703772d366ab9eadfc61d665&v=4'
            message='Mensaje de Prueba de Post sin imagen'
            timestamp='This is the timestamp'
            username='William Monroy'
        />
        <Post />
    </div>
}

export default Feed
