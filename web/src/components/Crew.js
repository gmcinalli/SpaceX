// Libs
import { useNavigate } from "react-router-dom"
import { useState } from "react"

// Components
import Autocomplete from "@mui/material/Autocomplete"
import LinearProgress from "@mui/material/LinearProgress"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TextField from "@mui/material/TextField"
import MemberStatus from "./StatusBadge"

// Hooks
import useDebounce from "../hooks/useDebounce.js"
import useGetCrew from "../hooks/useGetCrew.js"

// Static assets
import "./Crew.css"

function computeCrew(crew, navigate) {
    const agencies = {}
    const result = { members: [] }

    for (const it of crew) {
        const { id, name, agency, status } = it

        agencies[agency] = null

        result.members.push(
            <TableRow
                key={id}
                hover
                onClick={(event) => navigate(`/crew/${id}`)}
                sx={{
                    cursor: "pointer"
                }}
            >
                <TableCell align="left">
                    {name}
                </TableCell>
                <TableCell align="left">
                    {agency}
                </TableCell>
                <TableCell align="left">
                    <MemberStatus status={status} />
                </TableCell>
            </TableRow>
        )
    }

    result.agencies = Object.keys(agencies)

    return result
}

function Crew() {
    const [ agency, setAgency ] = useState(null)
    const [ search, setSearch ] = useState('')
    const [ agencyOptions, setAgencyOptions ] = useState([])

    const navigate = useNavigate()
    const debouncedSearch = useDebounce(search)

    const { crew, busy } = useGetCrew(agency, debouncedSearch)

    const { agencies, members } = computeCrew(crew, navigate)

    if (! agencyOptions.length && agencies.length) {
        setAgencyOptions(agencies)
    }

    function onAgencyChange(event, payload) {
        setAgency(payload)
    }

    function onSearchChange(event) {
        setSearch(event.target.value)
    }

    return (
        <div className="Crew">
            <div className="Crew-Header">
                <Autocomplete
                    className="Crew-Filter"
                    disablePortal
                    options={agencyOptions}
                    loading={busy}
                    renderInput={
                        (params) => (
                            <TextField
                                {...params}
                                label="Agency"
                                variant="standard"
                            />
                        )
                    }
                    value={agency}
                    onChange={onAgencyChange}
                />

                <TextField
                    className="Crew-Search"
                    label="Search"
                    type="search"
                    variant="standard"
                    value={search}
                    onChange={onSearchChange}
                />
            </div>

            <Paper
                elevation={3}
                sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                }}
            >
                <TableContainer sx={{ maxHeight: 700 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">Agency</TableCell>
                                <TableCell align="left">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { busy
                                ?
                                    <TableRow>
                                        <TableCell colSpan={3}>
                                            <div className="Crew-Loading">
                                                Loading data...
                                            </div>
                                            <LinearProgress />
                                        </TableCell>
                                    </TableRow>
                                :
                                    members
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

export default Crew
