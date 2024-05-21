import "./PageNotFound.css";

export function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
            <p>the page you are looking for does'nt exist.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=true" allow="autoplay" title="Page not Found"></iframe>
        </div>
    );
}
