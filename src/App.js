import { createRoutesFromElements, RouterProvider, Routes } from 'react-router';
import { createBrowserRouter, Route } from 'react-router-dom';
import { MainLayout } from 'src/components/MainLayout';
import { ProtectedRoute } from 'src/components/ProtectedRoute';
import { PublicRoute } from 'src/components/PublicRoute';
import { SessionProvider } from 'src/components/SessionProvider';

// public routes
import { SignUpView } from 'src/views/SignUpView';
import { LoginView, action as loginAction } from 'src/views/LoginView';
import { ForgotPasswordView } from 'src/views/ForgotPasswordView';

// protected routes
import { UserView } from 'src/views/UserView';
import { SettingsView } from 'src/views/SettingsView';
import { PostsView } from 'src/views/PostsView';
import { PostView } from 'src/views/PostView';

// common routes
import { HomeView } from './views/HomeView';
import { AboutView } from 'src/views/AboutView';
import { NotFoundView } from 'src/views/NotFoundView';
import { ErrorView } from 'src/views/ErrorView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SessionProvider />} errorElement={<ErrorView />}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/login"
          element={<PublicRoute element={<LoginView />} />}
          action={loginAction}
        />
        <Route
          path="/signup"
          element={<PublicRoute element={<SignUpView />} />}
        />
        <Route
          path="/forgot-password"
          element={<PublicRoute element={<ForgotPasswordView />} />}
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute
              element={<ProtectedRoute element={<UserView />} />}
            />
          }
        />
        <Route
          path="/settings"
          element={<ProtectedRoute element={<SettingsView />} />}
        />
        <Route path="/posts" element={<ProtectedRoute />}>
          <Route index element={<PostsView />} />
          <Route path=":uuid" element={<PostView />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundView />} />
    </Route>,
  ),
);

export const App = () => {
  return <RouterProvider router={router} />;
};