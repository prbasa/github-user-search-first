import './styles.scss';

type Props = {
    text: string;
}

const ButtonSearch = ({text}: Props) => (
    <>
    <button className="btn-search">
        {text}
    </button>
    </>
)

export default ButtonSearch;