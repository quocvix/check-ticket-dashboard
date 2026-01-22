import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="space-y-3">
            <h2 className="text-2xl font-semibold">không tìm thấy trang</h2>
            <Link
                to="/"
                className="underline"
            >
                về trang chủ
            </Link>
        </div>
    );
}
