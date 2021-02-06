import * as React from 'react'
import * as ReactDOM from "react-dom"
import CardContainer from "./CardContainer";
import ImageButton from "../Component/ImageButton";
import TabEntry from "../Component/TabEntry";

export default class PopupContainer extends React.Component {
    render() {
        return (
            <div className="form-group">
                <section>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <TabEntry title='共通リンク' identify='home' active={true} />
                        <TabEntry title='ツール' identify='tools' active={false} />
                        <TabEntry title='ページ情報' identify='page-information' active={false} />
                        <TabEntry title='設定' identify='settings' active={false} />
                        <TabEntry title='About' identify='about' active={false} />
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <CardContainer title='☆SNS★'>
                                <ImageButton
                                    title='FaceBook'
                                    image='https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico?_nc_eui2=AeHkbnXHk8-uQM0bm9AaOT7WPOn1bULX7cv759IrZkPcIP6tSZ3bESNu27hkrF2Bo5Wu3mi91ph1nXTWKotHDb77lmXS1hY28HjCxNDFaIoBrA'
                                    href='https://www.facebook.com/'
                                />
                                <ImageButton
                                    title='Instagram'
                                    image='https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico'
                                    href='https://www.instagram.com/'
                                />
                                <ImageButton
                                    title='Twitter'
                                    image='https://abs.twimg.com/favicons/favicon.ico'
                                    href='https://twitter.com/'
                                />
                                <ImageButton
                                    title='Find your inspiration. | Flickr'
                                    image='https://s.yimg.com/pw/favicon.ico'
                                    href='https://www.flickr.com/'
                                />
                                <ImageButton title='LinkedIn' image='https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca' href='https://www.linkedin.com/' />
                                <ImageButton title='YouTube' image='https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png' href='https://www.youtube.com/' />
                                <ImageButton title='Last.fm' image='https://www.last.fm/static/images/favicon.702b239b6194.ico' href='https://www.last.fm/ja/home' />
                            </CardContainer>
                        </div>
                        <div className="tab-pane fade" id="tools" role="tabpanel" aria-labelledby="tools-tab">
                            <h5 className="my-2">Tools</h5>
                            <div className='card'>
                                <h6 className="card-header">テキストエリアのURLをすべて開く</h6>
                                <div className="card-body">
                                    <textarea rows={5} id='referer' className='form-control mx-auto' />
                                    <button className="btn btn-primary btn-sm w-100 mt-2" id='open-by-text'>URLを開く
                                    </button>
                                </div>
                            </div>
                            <div className="card mt-3 p-2">
                                <button className="btn btn-secondary btn-sm w-100"
                                    id='copy-to-clipboard'>現在アクティブなタブのURLをクリップボードにコピーする
                                </button>
                                <button className="btn btn-secondary btn-sm w-100"
                                    id='all-copy-to-clipboard'>開いているすべてのタブのURLをクリップボードにコピーする
                                </button>
                                <button className="btn btn-secondary btn-sm w-100"
                                    id='reload-all-tabs'>開いているタブをすべてリロードする
                                </button>
                                <button className="btn btn-secondary btn-sm w-100"
                                    id='close-duplicate-tabs'>重複するタブを閉じる
                                </button>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="page-information" role="tabpanel"
                            aria-labelledby="page-information-tab">
                            <h5 className="my-2">Page Information</h5>
                            <div className='card'>
                                <h6 className="card-header">☆Favicon★</h6>
                                <div className="card-body">
                                    <textarea id='favicon-url' className='form-control'></textarea>
                                </div>
                                <h6 className="card-header">☆Title★</h6>
                                <div className="card-body">
                                    <textarea id='title' className='form-control' />
                                </div>
                                <h6 className="card-header">☆URL★</h6>
                                <div className="card-body">
                                    <textarea id='url' className='form-control' />
                                </div>
                                <h6 className="card-header">☆All★</h6>
                                <div className="card-body">
                                    <textarea id='page-meta' className='form-control' rows={3} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                            <h5 className="my-2">Settings</h5>
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-row px-2">
                                        <label><input type='checkbox' id='btn_newtab' /><span
                                            className='label-info'>新しいタブで開く</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                            <h5 className="my-2">About</h5>
                            <div className="card">
                                <div className="card-body text-center">
                                    <button className="btn btn-primary w-80"
                                        data-href="https://github.com/satoshi-nishinaka/chrome-extension-study">GitHub
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<PopupContainer />, document.getElementById('root'))
}