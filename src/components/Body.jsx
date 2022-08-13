import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
    render() {
        return (
            <main>
                <Banner />
                <div className="items pt-4">
                    <div className="container px-lg-5">
                        <div className="row gx-lg-5">
                            <Item icon={<i className="bi bi-collection"></i>} title='Fresh new layout' content="With Bootstrap 5, we' ve created a fresh new layout for this template!"/>
                            <Item icon={<i className="bi bi-cloud-download"></i>} title='Free to download' content="As always, Start Bootstrap has a powerful collectin of free templates."/>
                            <Item icon={<i className="bi bi-card-heading"></i>} title='Jumbotron hero header' content="The heroic part of this template is the jumbotron hero header!"/>
                            <Item icon={<i className="bi bi-bootstrap"></i>} title='Feature boxes' content="We've created some custom feature boxes using Bootstrap icons!"/>
                            <Item icon={<i className="bi bi-code"></i>} title='Simple clean code' content="We keep our dependencies up to date and squash bugs as they come!"/>
                            <Item icon={<i className="bi bi-patch-check"></i>} title='A name you trust' content="Start Bootstrap has been the leader in free Bootstrap templates since 2013!"/>                        
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
