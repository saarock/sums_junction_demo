import React from 'react'

const GradientColor = () => {
  return (
    <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/80 to-green-900/70"></div>
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                      linear-gradient(45deg, rgba(139, 69, 19, 0.1) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(139, 69, 19, 0.1) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(75, 0, 130, 0.1) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(75, 0, 130, 0.1) 75%)
                    `,
                backgroundSize: "60px 60px",
                backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
              }}
            ></div>
          </div>
        </div>
  )
}

export default GradientColor