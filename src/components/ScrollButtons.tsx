import "@/assets/scss/components/ScrollButtons.scss";

export default function ScrollButtons() {
    const getTarget = () =>
        document.getElementById("root") as HTMLElement | null;

    const scrollTop = () => {
        const el = getTarget();
        if (el) {
        el.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        }
    };

    const scrollBottom = () => {
        const el = getTarget();
        if (el) {
        el.scrollTo({
            top: el.scrollHeight,
            behavior: "smooth",
        });
        }
    };

    return (
        <div className="scroll-buttons">
            <button onClick={scrollTop}>↑</button>
            <button onClick={scrollBottom}>↓</button>
        </div>
    );
}