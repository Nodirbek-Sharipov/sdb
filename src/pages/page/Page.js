import React from 'react';

function Page(props) {
    return (
        <div className="page">
            <div className="container">
                <div className="page__row">
                    <div className="page__title">
                        <h1>Page title</h1>
                    </div>

                    <div className="page__content">
                        <p>Page content</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;