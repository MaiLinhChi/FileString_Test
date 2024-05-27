import Header from '@/components/Header';

const Default = ({ children }) => {
    return (
        <div className="h-full flex flex-col">
            <div>
                <Header />
            </div>
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default Default;
