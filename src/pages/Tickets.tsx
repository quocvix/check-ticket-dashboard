import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface Ticket {
    id: string;
    ticketCha: string;
    ticketCon: string;
    link: string;
    thucHien: string;
    ngayDone: string;
    checkLive: string;
    releaseDate: string;
}

// Sample data - thay thế bằng dữ liệu thực tế
const sampleTickets: Ticket[] = [
    {
        id: "TK-001",
        ticketCha: "PARENT-100",
        ticketCon: "CHILD-101",
        link: "https://jira.example.com/TK-001",
        thucHien: "Nguyễn Văn A",
        ngayDone: "2026-01-20",
        checkLive: "Đã kiểm tra",
        releaseDate: "2026-01-22",
    },
    {
        id: "TK-002",
        ticketCha: "PARENT-100",
        ticketCon: "CHILD-102",
        link: "https://jira.example.com/TK-002",
        thucHien: "Trần Văn B",
        ngayDone: "2026-01-21",
        checkLive: "Chưa kiểm tra",
        releaseDate: "2026-01-25",
    },
    {
        id: "TK-003",
        ticketCha: "PARENT-200",
        ticketCon: "CHILD-201",
        link: "https://jira.example.com/TK-003",
        thucHien: "Lê Thị C",
        ngayDone: "2026-01-22",
        checkLive: "Đang kiểm tra",
        releaseDate: "2026-01-28",
    },
];

export default function Tickets() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Danh sách Tickets</h1>
            </div>

            <div className="rounded-lg border">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50">
                            <TableHead className="font-semibold">ID</TableHead>
                            <TableHead className="font-semibold">Ticket Cha</TableHead>
                            <TableHead className="font-semibold">Ticket Con</TableHead>
                            <TableHead className="font-semibold">Link</TableHead>
                            <TableHead className="font-semibold">Thực hiện</TableHead>
                            <TableHead className="font-semibold">Ngày Done</TableHead>
                            <TableHead className="font-semibold">Check Live</TableHead>
                            <TableHead className="font-semibold">Release Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sampleTickets.map((ticket) => (
                            <TableRow key={ticket.id}>
                                <TableCell className="font-medium">{ticket.id}</TableCell>
                                <TableCell>{ticket.ticketCha}</TableCell>
                                <TableCell>{ticket.ticketCon}</TableCell>
                                <TableCell>
                                    <a
                                        href={ticket.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline dark:text-blue-400"
                                    >
                                        Xem
                                    </a>
                                </TableCell>
                                <TableCell>{ticket.thucHien}</TableCell>
                                <TableCell>{ticket.ngayDone}</TableCell>
                                <TableCell>
                                    <span
                                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                            ticket.checkLive === "Đã kiểm tra"
                                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                                : ticket.checkLive === "Đang kiểm tra"
                                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                        }`}
                                    >
                                        {ticket.checkLive}
                                    </span>
                                </TableCell>
                                <TableCell>{ticket.releaseDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
