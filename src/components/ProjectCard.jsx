import "./ProjcetCard.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions, Chip, Stack} from '@mui/material';
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FaceIcon from '@mui/icons-material/Face';

export default function ProjectCard(props) {
    const { name, description, skills, repoLink } = props;

    return (
        <Card sx={{
            maxWidth: 345,
            backgroundColor: '#009688'
        }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <div className={"skillList"}>
                        <Typography variant="body2" color="text.secondary">
                            Skills
                        </Typography>
                        {skills.map((skill, index) => (
                            <FontAwesomeIcon key={index} icon={skill} />
                        ))}
                    </div>
                </CardContent>
                <CardActions>
                    <a href={repoLink} target="_blank" rel="noopener noreferrer">
                        <Button>Repository</Button>
                    </a>
                </CardActions>
                <Stack direction="row" spacing={1}>
                    <Chip icon={<FaceIcon />} label="primary" color="primary" />
                    <Chip icon={<FaceIcon />} label="secondary" color="secondary" />
                    <Chip icon={<FaceIcon />} label="success" color="success" />
                </Stack>
            </CardActionArea>
        </Card>
    );
}
