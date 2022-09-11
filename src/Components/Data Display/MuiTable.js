import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function MuiTable() {
  return (
    // <TableContainer component={Paper}>
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
      {/* <Table aria-label='simple table'> */}
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell align='center'>Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                tableData.map(row=>(
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border:0}}}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell align='center'>{row.email}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const tableData=[{
    "id": 1,
    "first_name": "Winonah",
    "last_name": "Windle",
    "email": "wwindle0@admin.ch",
    "gender": "Female",
    "ip_address": "30.187.137.208"
  }, {
    "id": 2,
    "first_name": "Amby",
    "last_name": "Balme",
    "email": "abalme1@unblog.fr",
    "gender": "Male",
    "ip_address": "15.113.52.65"
  }, {
    "id": 3,
    "first_name": "Caritta",
    "last_name": "Gillbard",
    "email": "cgillbard2@wikipedia.org",
    "gender": "Female",
    "ip_address": "87.104.184.139"
  }, {
    "id": 4,
    "first_name": "Veronica",
    "last_name": "O'Hoolahan",
    "email": "vohoolahan3@sbwire.com",
    "gender": "Female",
    "ip_address": "135.95.24.66"
  }, {
    "id": 5,
    "first_name": "Heindrick",
    "last_name": "Seals",
    "email": "hseals4@constantcontact.com",
    "gender": "Male",
    "ip_address": "114.29.63.12"
  }, {
    "id": 6,
    "first_name": "Rosco",
    "last_name": "Pascoe",
    "email": "rpascoe5@github.io",
    "gender": "Male",
    "ip_address": "243.203.255.18"
  }, {
    "id": 7,
    "first_name": "Osbourn",
    "last_name": "Skacel",
    "email": "oskacel6@wsj.com",
    "gender": "Male",
    "ip_address": "191.12.55.249"
  }, {
    "id": 8,
    "first_name": "Ainsley",
    "last_name": "Cornfield",
    "email": "acornfield7@sfgate.com",
    "gender": "Female",
    "ip_address": "211.111.248.211"
  }, {
    "id": 9,
    "first_name": "Valle",
    "last_name": "Blazewicz",
    "email": "vblazewicz8@ameblo.jp",
    "gender": "Bigender",
    "ip_address": "32.150.229.50"
  }, {
    "id": 10,
    "first_name": "Bard",
    "last_name": "Twinberrow",
    "email": "btwinberrow9@ocn.ne.jp",
    "gender": "Male",
    "ip_address": "226.79.247.15"
  }]

export default MuiTable;
