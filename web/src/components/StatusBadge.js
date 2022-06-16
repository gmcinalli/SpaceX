// Components
import Chip from "@mui/material/Chip"

// Plain JS
import { green, grey, red } from "@mui/material/colors"

// API Schema
// https://github.com/r-spacex/SpaceX-API/blob/master/docs/crew/v4/schema.md

function StatusBadge({ status, className }) {
    const colors = {
        active: green[600],
        unactive: red[600],
        retired: grey[600],
        unknown: grey[600],
    }

    return (
        <Chip
            className={className}
            label={status}
            sx={{
                textTransform: 'uppercase',
                bgcolor: colors[status],
                fontWeight: 'bold',
                color: 'white',
            }}
        />
    )
}

export default StatusBadge
