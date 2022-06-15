// Libs
import { useNavigate, useParams } from "react-router-dom"

// Components
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import IconButton from "@mui/material/IconButton"
import StatusBadge from "./StatusBadge"
import Typography from "@mui/material/Typography"

// Hooks
import useGetCrewById from "../hooks/useGetCrewById"

// Static assets
import "./CrewMember.css"

function CrewMember() {
    const navigate = useNavigate()
    const params = useParams()

    const member = useGetCrewById(params.id)

    if (! member) {
        return
    }

    const { image, name, agency, status, wikipedia } = member

    return (
        <>
            <IconButton
                onClick={() => navigate('/')}
            >
                <ArrowBackIcon
                    color="primary"
                    fontSize="large"
                />
            </IconButton>

            <div className="CrewMember">
                <Card
                    raised
                    sx={{ borderRadius: 4, maxWidth: 500 }}
                >
                    <CardMedia
                        component="img"
                        height="500"
                        image={image}
                        alt={name}
                    />
                    <CardContent sx={{
                        padding: 3
                    }}>
                        <div className="CrewMember-Name">
                            <div>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {name}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    {agency}
                                </Typography>
                            </div>
                            <StatusBadge
                                className="CrewMember-Status"
                                status={status}
                            />
                        </div>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                textAlign: 'justify',
                                marginTop: 1
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: 2,
                        }}
                    >
                        <Button
                            size="medium"
                            color="primary"
                            href={wikipedia}
                            target="_blank"
                        >
                            Learn more
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </>

    )
}

export default CrewMember
