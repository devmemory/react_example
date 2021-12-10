import { ColorConsumer } from "./color_context"

const colors = [
    '#f3foff',
    '#e5dbff',
    '#d0bfff',
    '#b197fc',
    '#9775fa',
    '#845ef7',
    '#7950f2',
    '#7048e8',
    '#6741d9',
    '#5f3dc4'
]

const SelectColors = () => {
    return (
        <div>
            <h2>색상 선택</h2>
            <ColorConsumer>
                {({ actions }) => (
                    <div style={{ display: 'flex' }}>
                        {colors.map((color) => (
                            <div
                                key={color}
                                style={{
                                    background: color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer'
                                }}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={(e) => {
                                    e.preventDefault()
                                    actions.setSubColor(color)
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
        </div>
    )
}

export default SelectColors