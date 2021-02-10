import React, { PureComponent } from 'react'
import ContentLoader from 'react-content-loader'

class contentLoaderDetail extends PureComponent {
  render() {
    return (
      <div>
        <div className="load-skeleton-detail d-none d-md-block">
          <ContentLoader viewBox="0 0 900 500" width={900} height={500} backgroundColor="black" speed="1.2"
          foregroundColor="#404040">
              <rect x="42" y="0.93" rx="5" ry="5" width="280.55" height="410.59" />
              <rect x="380.84" y="30.67" rx="0" ry="0" width="500.72" height="20.12" />
              <rect x="380.84" y="70.67" rx="0" ry="0" width="300" height="9" />
              <rect x="380.84" y="100.67" rx="0" ry="0" width="500.72" height="9.12" />
              <rect x="380.84" y="140.67" rx="0" ry="0" width="300" height="9" />
              <rect x="380.84" y="180.67" rx="0" ry="0" width="300" height="9" />
            </ContentLoader>
        </div>
          <div className="load-skeleton-detail d-block d-md-none ">
            <ContentLoader viewBox="0 0 475 900" width={475} height={900} backgroundColor="black" speed="1.2"
            foregroundColor="#404040">
                <rect x="0" y="540" rx="4" ry="4" width="271" height="9" />
                <rect x="0" y="520" rx="3" ry="3" width="200" height="6" />
                <rect x="0" y="560" rx="4" ry="4" width="271" height="9" />
                <rect x="0" y="590" rx="3" ry="3" width="200" height="6" />
                <rect x="0" y="77" rx="10" ry="10" width="388" height="430" />
            </ContentLoader>
        </div>
    </div>
    )
  }
}

export default contentLoaderDetail;
