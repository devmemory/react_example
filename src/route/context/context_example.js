import { ColorConsumer, ColorProvider } from '../../component/context/color_context'
import SelectColors from '../../component/context/selectColor'

const ColorBox = () => {
    return (
        <ColorProvider>
            <ColorConsumer>
                {({ state }) => (
                    <>
                        <div>
                            <SelectColors />
                            <div
                                style={{
                                    height: '64px',
                                    width: '64px',
                                    background: state.color
                                }}
                            />
                            <div
                                style={{
                                    height: '32px',
                                    width: '32px',
                                    background: state.subColor
                                }}
                            />
                        </div>
                    </>
                )}
            </ColorConsumer>
        </ColorProvider>
    )
}

export default ColorBox