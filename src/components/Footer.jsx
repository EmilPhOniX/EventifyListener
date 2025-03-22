import '../assets/styles/footer.css';

export default function Footer() {
    return (
        <footer>
            <link rel="stylesheet" href="{{ asset('styles/footer.css') }}" />

            <div id="copyright">
                <p>©
                    <a href="https://www.linkedin.com/in/drdb-emilien/">Emilien de Robert</a> -
                    <a href="https://www.linkedin.com/in/amaury-celarier/">Amaury Celarier</a> -
                    <a href="https://www.linkedin.com/in/jordan-dupuy/">Jordan Dupuy</a> -
                    <a href="https://www.linkedin.com/in/nathanael-seitz/">Nathanaël Seitz</a> | 2025
                </p>
            </div>
            <div id="link">
            </div>
        </footer>
    )
}
