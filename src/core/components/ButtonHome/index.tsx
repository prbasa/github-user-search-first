import './styles.scss';

type Props = {
    text: string;
}

const ButtonHome = ({text}: Props) => (
    <>
    <button className="btn">
        {text}
    </button>
    </>
)

export default ButtonHome;