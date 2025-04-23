import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children, roles = [] }) {
    const { user } = useSelector((state) => state.auth);

    if (!user) return <Navigate to={'/auth'} replace />

    const hasRequiredRole = roles.length > 0 && roles.some(requiredRole => user.roles.includes(requiredRole));

    return hasRequiredRole ? children : <div>Unauthorized</div>
}