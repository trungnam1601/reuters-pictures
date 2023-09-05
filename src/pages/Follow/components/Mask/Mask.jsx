function Mask({ mask, children }) {
    return (
        <div
            style={{
                WebkitMaskImage: mask,
                maskImage: mask,
            }}
        >
            {children}
        </div>
    );
}

export default Mask;
