import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
    const err = useRouteError();
    const message = isRouteErrorResponse(err) ? `${err.status} ${err.statusText}` : err?.message || "đã xảy ra lỗi";

    return (
        <div className="space-y-3 p-6">
            <h2 className="text-2xl font-semibold">lỗi</h2>
            <p>{message}</p>
            <Link
                to="/"
                className="underline"
            >
                về trang chủ
            </Link>
        </div>
    );
}
